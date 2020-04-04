'use strict';

import { EnvironmentVariableCollection } from 'vscode';

export function assign(destination: EnvironmentVariableCollection, ...sources: any[]): any {
    sources.forEach(source => Object.keys(source).forEach((key) => destination.replace(key, source[key])));
    return destination;
}
