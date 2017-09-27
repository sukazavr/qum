#!/usr/bin/env node

import babelPresetEnv from 'babel-preset-env'
import babelRegister from 'babel-register'
import parseArgs from '../parse-args'


babelRegister({
	'presets': [
		[ babelPresetEnv, {
			'targets': {
				'node': true
			}
		} ]
	]
})

const { args, dealPath } = parseArgs()

if (!args) {
	console.log('First args should be parts of path to a deal')
	// TODO: Show suggestions of all existed deals
} else if (!dealPath) {
	console.log('I didn\'t find a deal')
} else {
	require(dealPath.string)
}
