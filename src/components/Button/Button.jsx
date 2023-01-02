import React from "react";
import { Button, ButtonWrapper } from "./Button.styled";

export const ButtonLoadMore = ({ onClickLoadMore }) => {
    return (
        <ButtonWrapper>
            <Button type="button" onClick={onClickLoadMore}>Load more</Button>
        </ButtonWrapper>
    )
}

