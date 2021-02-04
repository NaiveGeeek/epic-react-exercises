import Link from "next/link"
import { useTheme } from "hooks"
import { TextButton } from "../button"

const PrettyHeader = ({ style, children, Component, ...otherProps }) => {
    Component = Component ? Component : "div"
    const { headerFont } = useTheme()
    style = { ...style, fontFamily: headerFont }
    return <Component {...{ style, ...otherProps }}>{children}</Component>
}

const PrettyAnchor = ({ style, children, onClick, href, ...otherProps }) => {
    const { primaryColor } = useTheme()
    return (
        <a
            style={{ color: primaryColor, ...style }}
            {...{ onClick, href: href ? href : "#", ...otherProps }}
        >
            {children}
        </a>
    )
}

const PrettyLink = ({ style, children, href, ...otherProps }) => {
    const { primaryColor } = useTheme()
    return (
        <Link {...{ href }}>
            <a style={{ color: primaryColor, ...style }} {...{ ...otherProps }}>
                {children}
            </a>
        </Link>
    )
}

const INPUT_STYLE = {
    borderWidth: "0px",
    borderRadius: "10px",
    margin: "5px",
    padding: "5px 15px",
}

const PrettyInputField = ({ placeholder, value, onChange, style, ...otherProps }) => {
    const { bodyClassNames, bodyFont } = useTheme()
    return (
        <input
            className={bodyClassNames[0]}
            style={{ ...INPUT_STYLE, ...style, fontFamily: bodyFont }}
            {...{ placeholder, value, onChange, ...otherProps }}
        />
    )
}

const BorderedDiv = ({ style, children, ...otherProps }) => {
    const { primaryColor } = useTheme()
    return (
        <div
            style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: primaryColor,
                ...style,
            }}
            {...otherProps}
        >
            {children}
        </div>
    )
}

const PositiveIntegerSearchbar = ({
    style,
    onSubmit,
    setIncompleteValue,
    incompleteValue,
    placeholder,
    disableButton,
    disableInputField,
    submitButtonStyle,
    inputFieldStyle,
    submitButtonContent,
}) => {
    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(incompleteValue)
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                ...style,
            }}
        >
            <PrettyInputField
                type="number"
                pattern="^[0-9]"
                min="1"
                step="1"
                placeholder={placeholder}
                value={incompleteValue}
                onChange={e => setIncompleteValue(e.target.value)}
                style={inputFieldStyle}
                disabled={disableInputField}
            />
            <TextButton
                type="submit"
                disabled={disableButton}
                useBgPrimaryColor={true}
                isInvertedColor={true}
                style={submitButtonStyle}
            >
                {submitButtonContent ? submitButtonContent : "submit"}
            </TextButton>
        </form>
    )
}

export {
    PrettyHeader,
    PrettyAnchor,
    PrettyInputField,
    BorderedDiv,
    PrettyLink,
    PositiveIntegerSearchbar,
}
