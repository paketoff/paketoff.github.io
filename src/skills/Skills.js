import React, { Component } from 'react';
import SkillsMenu from "./SkillsMenu.js";
import Avatar from '../Avatar/Avatar.js';

export default class Skills extends Component {
  render() {
    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    )
  }
}
