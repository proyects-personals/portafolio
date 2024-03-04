export interface ErrorMessagesForm {
    [key: string]: string;

    minlength: string;
    maxlength: string;
    pattern: string;
    required: string;
}