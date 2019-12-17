import React from "react"

export interface FormProps {
    className?: string,
    onSubmit?: (data: any) => void
    // children: (defaultData: any) => React.ReactNode
}

export interface FormState {}

export default
class Form
extends React.Component<FormProps, FormState> {
    static defaultProps = {
        className: "",
        onSubmit: () => {}
    }

    // defaultData: any

    extractData = (form: HTMLFormElement): any => {
        var data = {}
        try {
            ;[...form.elements].forEach((element:HTMLInputElement) => {
                if (element.name)
                    data[element.name] = element.value
            })
            console.info('Form data extracted', data)
        } catch (e) {
            console.error(`Error occured during form data extraction - *${e}*`)
        }
        return data
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.props.onSubmit(this.extractData(event.currentTarget))
        return false
    }

    render() {
        return <>
            <form
                className={this.props.className}
                onSubmit={this.handleSubmit}
            >
                {this.props.children}
            </form>
        </>
    }
}