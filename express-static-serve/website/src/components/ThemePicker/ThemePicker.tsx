import { createPipelineFromOptions } from '@azure/core-http';
import React, { useState } from 'react';
import classes from './ThemePicker.module.css'

function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);

  const matchRgb = /\d{1,3}(,\s|,|\s)\d{1,3}(,\s|,|\s)\d{1,3}/;

  function togglePanel() {
    setIsOpen(!isOpen);
  }

  function changeValue(property: string, value: string) {
    if(!value) return;
    if(!value.match(matchRgb)) {
      return;
    }

    let root = document.documentElement;

    root.style.setProperty(property, value);
  }

  function changeTheme(themeNumber: number) {
    let root = document.documentElement;
    let primaryColor = '';
    let secondaryColor = '';
    let appBackgroundColor = '';
    let primaryFontColor = '';
    let secondaryFontColor = '';
    let primaryBorderColor = '';
    let primaryButtonColor = '';

    switch(themeNumber) {
      case 1: {
        primaryColor = '2, 102, 112';
        secondaryColor = '159, 237, 215';
        primaryFontColor = '254, 249, 199';
        secondaryFontColor = '252, 225, 129';
        primaryBorderColor = '200, 200, 155';
        primaryButtonColor = '237, 234, 229';
        break;
      }
      default: {
        primaryColor = '50, 150, 150';
        secondaryColor = '230, 230, 200';
        appBackgroundColor = '230, 230, 200';
        primaryFontColor = '18, 62, 105';
        secondaryFontColor = '255, 255, 255';
        primaryBorderColor = '200, 200, 155';
        primaryButtonColor = '0, 255, 255';
      }
    }

    root.style.setProperty('--primaryColor', primaryColor);
    root.style.setProperty('--secondaryColor', secondaryColor);
    root.style.setProperty('--appBackgroundColor', appBackgroundColor);
    root.style.setProperty('--primaryFontColor', primaryFontColor);
    root.style.setProperty('--secondaryFontColor', secondaryFontColor);
    root.style.setProperty('--primaryBorderColor', primaryBorderColor);
    root.style.setProperty('--primaryButtonColor', primaryButtonColor);
  }

  return (
    <nav>
      <button className={classes.hamburger} onClick={() => togglePanel()}>
        l l l
      </button>
      <div className={`${classes.panel} ${isOpen ? classes.open : ''}`}>
        <button
          type="button"
          className={classes.exitButton}
          onClick={() => togglePanel()}
        >
          +
        </button>
        <div className={classes.customizeContainer}>
          <ul className={classes.themeList}>
            Themes:
            <li><input type="radio" id="theme1" name="theme" onClick={() => changeTheme(1)}/> <label>Theme 1</label></li>
            <li><input type="radio" id="theme2" name="theme" onClick={() => changeTheme(2)}/> <label>Theme 2</label> </li>
            <li><input type="radio" id="default" name="theme" onClick={() => changeTheme(999)}/> <label>default</label></li>
          </ul>
          <ul className={classes.manualValues}>
            Customize:
            <li><input type="text" className={classes.manualInput} onChange={(e) => changeValue('--primaryColor', e.target.value)}/><label className={classes.manualLabel}>PrimaryColor</label></li>
            <li><input type="text" className={classes.manualInput} onChange={(e) => changeValue('--secondaryColor', e.target.value)}/><label className={classes.manualLabel}>secondaryColor</label></li>
            <li><input type="text" className={classes.manualInput} onChange={(e) => changeValue('--appBackgroundColor', e.target.value)}/><label className={classes.manualLabel}>appBackgroundColor</label></li>
            <li><input type="text" className={classes.manualInput} onChange={(e) => changeValue('--primaryFontColor', e.target.value)}/><label className={classes.manualLabel}>primaryFontColor</label></li>
            <li><input type="text" className={classes.manualInput} onChange={(e) => changeValue('--secondaryFontColor', e.target.value)}/><label className={classes.manualLabel}>secondaryFontColor</label></li>
            <li><input type="text" className={classes.manualInput} onChange={(e) => changeValue('--primaryBorderColor', e.target.value)}/><label className={classes.manualLabel}>primaryBorderColor</label></li>
            <li><input type="text" className={classes.manualInput} onChange={(e) => changeValue('--primaryButtonColor', e.target.value)}/><label className={classes.manualLabel}>primaryButtonColor</label></li>
          </ul>
        </div>
      </div>
      <div
        className={`${classes.panelBackground} ${
          isOpen ? classes.open : ''
        }`}
        onClick={() => togglePanel()}
      ></div>
    </nav>
  );
}

export default ThemePicker;