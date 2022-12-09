import { toCapitalizedWords } from '../../common/utils'

type ValidationError = {
    Field?: string;
    ErrorCode?: string;
    Message: string;
};

interface ValidationErrorResponse {
    error?: string;
    error_description?: string;
    ValidationErrors?: ValidationError[];
    ErrorCode?: number;
    Message?: string;
}

const parseError = async (response: Response) => {
    const body = await response.json();
    const error = body.error || {};
    const msg500 = 'Internal Server Error.';
    const msg = error.message || msg500;

    return new Error(msg);
};

const parseValidationError = async (response: Response): Promise<string> => {
    const body: ValidationErrorResponse = await response.json();
    const initialValue = '';
    let resultMessage: ValidationError | undefined = { Message: initialValue };
    if (body?.ValidationErrors) {
        resultMessage = body.ValidationErrors?.reduce((previousValue: ValidationError, currentValue: ValidationError) => {
            previousValue.Message += currentValue.Message + '; ';
            return previousValue;
        }, resultMessage);

        return resultMessage?.Message || '';
    }

    if (body?.error_description) {
        return toCapitalizedWords(body.error_description);
    }

    if (body?.Message) {
        return body.Message;
    }

    return '';
};

export const parseResponse = async (response: Response) => {
    console.log('response.status', response.status);
    switch (response.status) {
        case 200: {
            const string = await response.text();
            return string === '' ? {} : JSON.parse(string);
        }
        case 204:
            return {};
        case 400:
        case 403:
            return {};
            throw new Error(await parseValidationError(response));
        case 500:
            throw await parseError(response);
    }
};

export const headers = (token: string) => ({
    Authorization: `Bearer ${token}`,
});
