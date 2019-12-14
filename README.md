# React SVG Main

### react-svg-main

Svg Icons Handler

## Usage

```
// icon.js
import SvgMain from 'react-svg-main';
const iconsSet = {home: '<Svg width="200" height="60"><Rect x="25" y="5" width="150"  height="50" fill="rgb(0,0,255)" /></Svg>'};

export default class Icon extends SvgMain {
  constructor(props) {
    super(props);
    this.iconsSet = iconsSet;
  }
}
```

```
// App.js
import Icon from './icon';
// Inside some view component
render() {
    return (
        <Fragment>
          <Icon name="heart" />
          <Icon name="home" />
          <Icon name="home" height="40" width="40" color="red" />
        </Fragment>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-svg-main
```

#### npm

```bash
npm install --save react-svg-main
```

## API

### <Icon name [group color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of file in selected group, can contain group name before '/' sign | "home", "font-awesome/home"
group | yes | default | name of the group | "essential"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
