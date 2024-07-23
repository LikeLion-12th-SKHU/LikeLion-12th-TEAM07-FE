import styled from 'styled-components';
export const CreateGameContainer = styled.div`
    margin: 20px;
    width: 950px;
    height: 700px;
    padding: 30px;
    background-color: #dddddd;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
export const Cancel = styled.div`
    padding: 15px;
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
    background-color: #e45151;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #ce4a4a;
    }
`;
export const Row1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
`;

export const Row3 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Label = styled.label`
    font-weight: bold;

    font-size: 1.2em;
`;
export const CustomSelect = styled.select`
    padding: 10px 12px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    background-color: #ffffff;
    cursor: pointer;
    appearance: none;
    position: relative;
    background: #fff;

    &:focus {
        outline: none;
        border-color: #4caf50;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }

    option {
        padding: 10px;
    }
`;
export const Input = styled.input`
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 90%;
`;

export const InputTitle = styled.input`
    padding: 10px;
    font-size: 24px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 97%;
`;

export const TextArea = styled.textarea`
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 97%;
    height: 340px;
    resize: none;
`;

export const CreateButton = styled.button`
    padding: 15px;
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 10px;

    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

export const DetailBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
