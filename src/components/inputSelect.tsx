import React from "react"

import "styles/components/input-select"

export type IChangeEvent = React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
export type ValidityKey = keyof ValidityState

export interface InputSelectProps {
    type?: "text" | "tel" | "password" | "email",
    label?: string,
    name?: string,
    required?: boolean,
    pattern?: string,
    placeholder?: string,
    defaultValue?: string,
    inputClass?: string,
    onChange?: (event: IChangeEvent) => string,
    renderInvalidMessage?: (key: ValidityKey) => React.ReactNode,
}

export interface InputSelectState {
    value: string,
    country: string,
    openOptions: boolean,
    error: string,
    valid: boolean,
    everChanged: boolean
}

export type SelectData = {country: string, prefix: number}[]


export default
class InputSelect
extends React.Component<InputSelectProps, InputSelectState> {
    static defaultProps = {
        type: "text",
        name: "",
        required: false,
        placeholder: "",
        defaultValue: "",
        selectName: "",
        selectPlaceholder: "",
        renderInvalidMessage: (key: ValidityKey) => key,
        onChange: (event: IChangeEvent) => event.currentTarget.value,

    }

    state = {
        country: "US",
        openOptions: false,
        error: undefined as ValidityKey,
        value: this.props.defaultValue,
        valid: false,
        everChanged: false
    }

    selectData: SelectData = [
        {
            country: "US",
            prefix: 1
        },
        {
            country: "BR",
            prefix: 55
        },
        {
            country: "FR",
            prefix: 33
        },
        {
            country: "IN",
            prefix: 91
        },
        {
            country: "ES",
            prefix: 34
        }
    ] 

    inputSelect: HTMLInputElement

    static extractInvalidKey = (validity: ValidityState): ValidityKey => {
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

    onClickSelect = (country: string):void => {
        this.setState({
            country,
            openOptions: false
        })

    }

    showSelectList = (event: React.MouseEvent) => {
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        this.setState({
            openOptions: !this.state.openOptions
        })
    }

    hideSelectHandler = () => {
        this.setState({
            openOptions: false
        })
    }

    componentDidMount () {
        document.addEventListener("click", this.hideSelectHandler)
    }

    componentWillUnmount () {
        document.removeEventListener("click", this.hideSelectHandler)
    }


    handleInvalid = () => {
        event.preventDefault()
        var error = InputSelect.extractInvalidKey(this.inputSelect.validity)
        this.setState({
            error: error || undefined,
            valid: !error
        })
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            value: event.currentTarget.value,
            everChanged: true,
        }, () => {
            this.handleInvalid()
        })
    }

    handleInputChange = () => {

    }

    render() {
        var { country, error, value } = this.state 
        var item = this.selectData.find(data => data.country == country)
        var isValid = !!value && !error
        
        return <>
            <div 
                className={`input-wrap ${
                    error ? "invalid" : ""} ${
                    isValid ? "valid" : ""}
                `}>
                <span className="inp-name">
                    {this.props.label}
                </span>
                <input
                    className="input-prefix-value"
                    type="text"
                    value={item.prefix}
                    onChange={this.handleInputChange}
                />
                <div className="input-select-wrap">
                    <div className="select-value">
                        <span className="country">
                            {item.country}
                        </span>
                        <span className="phone-prefix">
                            {item.prefix}
                        </span>
                        <span 
                            className="show-list"
                            onClick={this.showSelectList}
                        >
                            {this.state.openOptions
                                ? "▲"
                                : "▼"
                            }
                        </span>
                        {this.state.openOptions && 
                            <ul className="select-list">
                            {this.selectData.map((data) => {
                                return(
                                    <li 
                                        className="select-list-item"
                                        key={data.prefix}
                                        onClick={() => this.onClickSelect(data.country)}
                                    >
                                        <span> 
                                            {data.country} 
                                        </span>
                                        <span> 
                                            {data.prefix} 
                                        </span>
                                    </li>
                                )
                            })}
                            </ul>
                        }
                    </div>
                    <input 
                        type={this.props.type}
                        name={this.props.name}
                        value={this.state.value}
                        placeholder={this.props.placeholder}
                        required={this.props.required}
                        pattern={this.props.pattern}
                        onChange={this.handleChange}
                        onInvalid={this.handleInvalid}
                        ref={r => this.inputSelect = r}
                        className={`${this.props.inputClass} input`}
                        autoComplete="off"
                    />
                </div>
                {error &&
                    <p className="invalid">
                        {this.props.renderInvalidMessage(error)}
                    </p>
                }
            </div>
        </>
    }
}