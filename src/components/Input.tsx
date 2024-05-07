type PropsInput = {
    typeInput: {
        typeId: string | undefined;
        typeText: string;
    };
};

export default function Input({typeInput}: PropsInput) {
    return(
        <>
            <input
                id={typeInput.typeId} 
                type="text"
                name={typeInput.typeText}
                value={typeInput.typeText}
                placeholder={typeInput.typeText}
                />
        </>
    );
}
