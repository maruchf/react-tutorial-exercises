import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = props => {
    return 
	(<div className="jumbotron">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <hr className="my-4">
        <p>{props.description}</p>
        <p className="lead">
        <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">{buttonLabel}</a>
        </p>
    </div>)};

Jumbotron.propsTypes = {
    title: PropsType.string,
    description: PropsType.string, 
    buttonLabel: PropsType.string, 
    buttonURL: PropsType.string
    };


ReactDOM.render(<Jumbotron 
title="Welcome to react" 
description="React is the most popular rendering library in the world" 
buttonLabel="Go to the official website"
buttonURL="https://reactjs.org/"/>, document.querySelector("#myDiv"));