interface SwitchChipInterface{
    choiceType: "single" | "multiple";
    choices: string[];
    colorScheme: string;
    selectedChoice: string | string[];
    onChoiceSelect: (e:string) => void;
}