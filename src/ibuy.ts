// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const ibuy: CustomThemeConfig = {
	name: 'ibuy',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #9647ef 
		"--color-primary-50": "239 227 253", // #efe3fd
		"--color-primary-100": "234 218 252", // #eadafc
		"--color-primary-200": "229 209 251", // #e5d1fb
		"--color-primary-300": "213 181 249", // #d5b5f9
		"--color-primary-400": "182 126 244", // #b67ef4
		"--color-primary-500": "150 71 239", // #9647ef
		"--color-primary-600": "135 64 215", // #8740d7
		"--color-primary-700": "113 53 179", // #7135b3
		"--color-primary-800": "90 43 143", // #5a2b8f
		"--color-primary-900": "74 35 117", // #4a2375
		// secondary | #2e1746 
		"--color-secondary-50": "224 220 227", // #e0dce3
		"--color-secondary-100": "213 209 218", // #d5d1da
		"--color-secondary-200": "203 197 209", // #cbc5d1
		"--color-secondary-300": "171 162 181", // #aba2b5
		"--color-secondary-400": "109 93 126", // #6d5d7e
		"--color-secondary-500": "46 23 70", // #2e1746
		"--color-secondary-600": "41 21 63", // #29153f
		"--color-secondary-700": "35 17 53", // #231135
		"--color-secondary-800": "28 14 42", // #1c0e2a
		"--color-secondary-900": "23 11 34", // #170b22
		// tertiary | #e7baff 
		"--color-tertiary-50": "251 245 255", // #fbf5ff
		"--color-tertiary-100": "250 241 255", // #faf1ff
		"--color-tertiary-200": "249 238 255", // #f9eeff
		"--color-tertiary-300": "245 227 255", // #f5e3ff
		"--color-tertiary-400": "238 207 255", // #eecfff
		"--color-tertiary-500": "231 186 255", // #e7baff
		"--color-tertiary-600": "208 167 230", // #d0a7e6
		"--color-tertiary-700": "173 140 191", // #ad8cbf
		"--color-tertiary-800": "139 112 153", // #8b7099
		"--color-tertiary-900": "113 91 125", // #715b7d
		// success | #2bd040 
		"--color-success-50": "223 248 226", // #dff8e2
		"--color-success-100": "213 246 217", // #d5f6d9
		"--color-success-200": "202 243 207", // #caf3cf
		"--color-success-300": "170 236 179", // #aaecb3
		"--color-success-400": "107 222 121", // #6bde79
		"--color-success-500": "43 208 64", // #2bd040
		"--color-success-600": "39 187 58", // #27bb3a
		"--color-success-700": "32 156 48", // #209c30
		"--color-success-800": "26 125 38", // #1a7d26
		"--color-success-900": "21 102 31", // #15661f
		// warning | #c98f3a 
		"--color-warning-50": "247 238 225", // #f7eee1
		"--color-warning-100": "244 233 216", // #f4e9d8
		"--color-warning-200": "242 227 206", // #f2e3ce
		"--color-warning-300": "233 210 176", // #e9d2b0
		"--color-warning-400": "217 177 117", // #d9b175
		"--color-warning-500": "201 143 58", // #c98f3a
		"--color-warning-600": "181 129 52", // #b58134
		"--color-warning-700": "151 107 44", // #976b2c
		"--color-warning-800": "121 86 35", // #795623
		"--color-warning-900": "98 70 28", // #62461c
		// error | #fe505c 
		"--color-error-50": "255 229 231", // #ffe5e7
		"--color-error-100": "255 220 222", // #ffdcde
		"--color-error-200": "255 211 214", // #ffd3d6
		"--color-error-300": "255 185 190", // #ffb9be
		"--color-error-400": "254 133 141", // #fe858d
		"--color-error-500": "254 80 92", // #fe505c
		"--color-error-600": "229 72 83", // #e54853
		"--color-error-700": "191 60 69", // #bf3c45
		"--color-error-800": "152 48 55", // #983037
		"--color-error-900": "124 39 45", // #7c272d
		// surface | #c0c0c0 
		"--color-surface-50": "246 246 246", // #f6f6f6
		"--color-surface-100": "242 242 242", // #f2f2f2
		"--color-surface-200": "239 239 239", // #efefef
		"--color-surface-300": "230 230 230", // #e6e6e6
		"--color-surface-400": "211 211 211", // #d3d3d3
		"--color-surface-500": "192 192 192", // #c0c0c0
		"--color-surface-600": "173 173 173", // #adadad
		"--color-surface-700": "144 144 144", // #909090
		"--color-surface-800": "115 115 115", // #737373
		"--color-surface-900": "94 94 94", // #5e5e5e
		
	}
}