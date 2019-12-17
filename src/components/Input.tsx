import React from "react"

import "styles/components/input"

export type IChangeEvent = React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
export type IFocusEvent = React.FocusEvent<HTMLInputElement>
export type IKeyboardEvent = React.KeyboardEvent<HTMLInputElement>

export type ValidityKey = keyof ValidityState
export type CheckValidityType = "formSubmit" | "everyInput" | "inputAfterBlur" | "blur"
export type CheckValidityEvent = "focus" | "blur" | "change" | "submit"


export interface DefaultInputProps {
    type?: "text" | "email" | "password"| "number" | "tel",
    label?: React.ReactNode,
    name?: string,
    required?: boolean,
    placeholder?: string,
    defaultValue?: string,
    validateOn?: string,
    pattern?: string,
    iconPath?: string,
    className?: string,
    textArea?: boolean,
    onInvalid?: (key: ValidityKey) => void,
    onValid?: () => void,
    onFocus?: (event: IFocusEvent) => void,
    onChange?: (event: IChangeEvent) => string,
    onBlur?: (event: IFocusEvent) => void,
    onKeyDown?: (event: IKeyboardEvent) => void
    renderInvalidMessage?: (key: ValidityKey) => React.ReactNode,
    manualSetter?: (ref: (value: string) => void) => void,
	manualGetter?: (ref: () => string) => void,
    manualValidator?: (value: string) => ValidityKey | void
}

export interface DefaultInputState {
    value: string,
    error: string,
    valid: boolean,
    everChanged: boolean,
    everFocused: boolean,
    everBlured: boolean
}

export const extractInvalidKey = (validity: ValidityState): ValidityKey => {
    var validityKey: ValidityKey
    var iterationKey: ValidityKey
    for (iterationKey in validity) {
        if (iterationKey != "valid" && validity[iterationKey]) {
            validityKey = iterationKey
            break
        }
    }
    return validityKey
}

export default
class Input
extends React.Component<DefaultInputProps, DefaultInputState> {
    static defaultProps = {
        type: "text",
        required: false,
        placeholder: "",
        defaultValue: "",
        validateOn: "everyInput",
        iconPath: "",
        onChange: (event: IChangeEvent) => event.currentTarget.value,
        onFocus: () => {},
        onBlur: () => {},
        onInvalid: () => {},
		onValid: () => {},
        renderInvalidMessage: (key: ValidityKey) => key
    }

    static formatValue = (value: string, mask: string): string => {
		var result = ""
		for (var i = 0, j = 0; i < mask.length; i++) {
			var char = mask[i]
			var digit = value[j]
			if (!digit)
				break
			if (char == "*") {
				result += digit 
				j++
			} else {
				result += char
			}
		}
		return result
    }
    
    static maskToPattern = (mask: string): string => {
		return mask.replace(/\*+/g, (match, group) => {
			return `\\d{${match.length}}`
		}).replace(/[()\s]/g, match => {
			return match == " "
				? "\\s"
				: `\\${match}`
		})
	}

    state = {
		value: this.props.defaultValue,
		error: undefined as ValidityKey,
		valid: false,
		everChanged: false,
		everFocused: false,
		everBlured: false
	}

    input: HTMLInputElement | HTMLTextAreaElement

    componentDidMount() {
		this.props.manualSetter &&
			this.props.manualSetter(this.setValue)
		this.props.manualGetter &&
			this.props.manualGetter(() => this.state.value)
		if (this.props.defaultValue)
			this.handleValidity()
    }
    
    componentDidUpdate(prevProps: DefaultInputProps) {
		if (this.props.pattern != prevProps.pattern)
			this.input.checkValidity()
    }
    
    setValue = (value:string, manual: boolean = true) => {
        this.setState({ value }, () => {
            this.checkValidity("change")
        })

        if(manual) {
            const propertyDescription = Object.getOwnPropertyDescriptor(
                window.HTMLImageElement.prototype,
                "value"
            )

            if (propertyDescription) {
                var setter = propertyDescription.set
                setter.call(this.input, value)

                const ev = new Event("input", {bubbles: true})
                this.input.dispatchEvent(ev)
            }
        }
    }

    handleChange = (event: IChangeEvent) => {
		this.setState({
			value: this.props.onChange(event),
			everChanged: true
		}, () => {
			this.checkValidity("change")
		})
	}


    handleValidity = () => {
        if (this.input) {
            var error = this.props.manualValidator
                ? this.props.manualValidator(this.state.value)
                : extractInvalidKey(this.input.validity)

            if (!error)
                this.props.onValid()
            else
                this.props.onInvalid(error)
            this.setState({
                error: error || undefined,
				valid: !error
            })
        }
    }


    checkValidity = (eventType: CheckValidityEvent) => {
        var { validateOn } = this.props
		var {
			everChanged,
			everFocused,
			everBlured,
		} = this.state
		switch (eventType) {
			case "change":
				let shouldCheck = validateOn == "everyInput"
					|| (validateOn == "inputAfterBlur" && everBlured)
				if (shouldCheck)
					this.handleValidity()
				break
			case "blur":
				if (validateOn != "formSubmit")
					this.handleValidity()
				break
			case "submit":
				this.handleValidity()
		}
    }


    handleInvalid = (event: IChangeEvent) => {
        event.preventDefault()
        this.checkValidity("submit")

    }

    handleFocus = (event: IFocusEvent) => {
		if (event.type == "focus") {
			// focus handler
			if (!this.state.everFocused)
				this.setState({ everFocused: true }, () => {
					this.checkValidity("focus")
				})
			this.props.onFocus(event)
		} else {
			// blur handler
			if (!this.state.everBlured)
				this.setState({ everBlured: true }, () => {
					this.checkValidity("blur")
				})
			this.props.onBlur(event)
		}
	}

    render() {
        var { error, valid, value } = this.state
        var isValid = !this.props.required && !value
            ? false
            : !error && valid
        return (
            <div 
                className={`input-default ${
                    error ? "invalid" : ""} ${
                    isValid ? "valid" : ""}
                `}>
                <label 
                    className="inp-name"
                    htmlFor={this.props.name}
                >
                    {this.props.label}
                </label>
                <div  className="input-wrap">
                    {this.props.textArea
                    ? <textarea 
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={this.handleChange}
                        name={this.props.name}
                        ref={r => this.input = r}
                        className={`textarea ${this.props.className}`}
                    /> 
                    : <input 
                        id={this.props.name}
                        type={this.props.type}
                        name={this.props.name}
                        value={this.state.value}
                        required={this.props.required}
                        placeholder={this.props.placeholder}
                        pattern={this.props.pattern}
                        className={`input-form ${this.props.className}`}
                        onChange={this.handleChange}
                        onInvalid={this.handleInvalid}
                        ref={r => this.input = r}
                        onFocus={this.handleFocus}
                        onBlur={this.handleFocus}
                        autoComplete="off"
                        // onKeyDown={this.props.onKeyDown}
                    />
                    }
                </div>
                {this.props.iconPath &&
                    <img 
                        src={this.props.iconPath} 
                        alt="icon"
                        className="inp-icon"
                    />
                }
                {error &&
                    <p className="invalid">
                        {this.props.renderInvalidMessage(error)}
                    </p>
                }
            </div>
        )
    }
}