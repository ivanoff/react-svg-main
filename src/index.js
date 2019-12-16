import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';

const question = require('./data/question');

export default class SvgMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.iconsSet) this.iconsSet = {};

    const allGroups = Object.keys(this.iconsSet);
    const defaultSet = allGroups.length === 1 ? allGroups[0] : 'material-design';

    const { group: sourceGroup, name: sourceName, width = 20, height = 20, color, stroke, ...rest } = this.props || {};

    const [, group, name] = sourceName.match(/(.*?)\/(.*)/) || [, sourceGroup || defaultSet, sourceName];

    // icon will be group/name or defaultGroup/name or name or question
    let icon = this.iconsSet[group] && this.iconsSet[group][name];
    if(!icon) icon = this.iconsSet[defaultSet] && this.iconsSet[defaultSet][name];
    if(!icon) icon = this.iconsSet[name];
    if(typeof icon !== 'string') icon = question;

    if(color) icon = icon.replace(/<path /g, `<path fill="${color}" `)
    if(stroke) icon = icon.replace(/<path /g, `<path stroke="${stroke}" `)

    return <SvgXml xml={icon} width={width} height={height} {...rest} />
  }
}

