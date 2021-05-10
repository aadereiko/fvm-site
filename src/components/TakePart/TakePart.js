import React from "react";
import { Button } from "../general/Button";
import "./TakePart.css";

export const TakePart = () => {
  return (
    <div className="take-part-wrapper flex-center">
      <h1 className="part-title take-part-title">ПРИНЯТЬ УЧАСТИЕ</h1>
      <a href="https://t.me/phvm_bot" target="_blank">
        <Button>
          <span>ЗАРЕГИСТРИРОВАТЬСЯ</span>
        </Button>
      </a>
    </div>
  );
};
