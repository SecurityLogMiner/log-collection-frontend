
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESS_TERMCAP_se: string;
	export const POWERSHELL_TELEMETRY_OPTOUT: string;
	export const TMUX: string;
	export const MAIL: string;
	export const LANGUAGE: string;
	export const LESS_TERMCAP_ue: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const FINGERS_HINT_POSITION: string;
	export const XDG_SEAT: string;
	export const DOTNET_CLI_TELEMETRY_OPTOUT: string;
	export const FINGERS_HIGHLIGHT_FORMAT_NOCOLOR: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const FINGERS_COPY_COMMAND_UPPERCASE: string;
	export const LD_LIBRARY_PATH: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_json: string;
	export const PANEL_GDK_CORE_DEVICE_EVENTS: string;
	export const GTK_MODULES: string;
	export const PAGER: string;
	export const XDG_SEAT_PATH: string;
	export const _ZSH_TMUX_FIXED_CONFIG: string;
	export const FINGERS_COPY_COMMAND: string;
	export const LESS_TERMCAP_so: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const HIP: string;
	export const COLOR: string;
	export const COMMAND_NOT_FOUND_INSTALL_PROMPT: string;
	export const npm_config_metrics_registry: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const FINGERS_COMPACT_HINTS: string;
	export const LOGNAME: string;
	export const LESS_TERMCAP_us: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const COLORFGBG: string;
	export const FINGERS_HINT_FORMAT_NOCOMPACT: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_cache: string;
	export const EXT: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const GTK3_MODULES: string;
	export const SESSION_MANAGER: string;
	export const _JAVA_OPTIONS: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_PATH: string;
	export const DISPLAY: string;
	export const FINGERS_HIGHLIGHT_FORMAT_NOCOMPACT: string;
	export const LANG: string;
	export const POWERSHELL_UPDATECHECK: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LS_COLORS: string;
	export const TERM_PROGRAM: string;
	export const XAUTHORITY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const ZSH_TMUX_TERM: string;
	export const npm_lifecycle_script: string;
	export const FINGERS_HINT_FORMAT: string;
	export const FINGERS_PATTERNS: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const FINGERS_HINT_FORMAT_NOCOMPACT_NOCOLOR: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const LESS_TERMCAP_mb: string;
	export const FINGERS_HIGHLIGHT_FORMAT: string;
	export const LESS_TERMCAP_md: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const FINGERS_HINT_POSITION_NOCOMPACT: string;
	export const LESS_TERMCAP_me: string;
	export const PWD: string;
	export const npm_config_globalignorefile: string;
	export const npm_execpath: string;
	export const FINGERS_HIGHLIGHT_FORMAT_NOCOMPACT_NOCOLOR: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const FINGERS_HINT_FORMAT_NOCOLOR: string;
	export const TMUX_PANE: string;
	export const EDITOR: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESS_TERMCAP_se: string;
		POWERSHELL_TELEMETRY_OPTOUT: string;
		TMUX: string;
		MAIL: string;
		LANGUAGE: string;
		LESS_TERMCAP_ue: string;
		USER: string;
		npm_config_user_agent: string;
		FINGERS_HINT_POSITION: string;
		XDG_SEAT: string;
		DOTNET_CLI_TELEMETRY_OPTOUT: string;
		FINGERS_HIGHLIGHT_FORMAT_NOCOLOR: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		FINGERS_COPY_COMMAND_UPPERCASE: string;
		LD_LIBRARY_PATH: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_json: string;
		PANEL_GDK_CORE_DEVICE_EVENTS: string;
		GTK_MODULES: string;
		PAGER: string;
		XDG_SEAT_PATH: string;
		_ZSH_TMUX_FIXED_CONFIG: string;
		FINGERS_COPY_COMMAND: string;
		LESS_TERMCAP_so: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		HIP: string;
		COLOR: string;
		COMMAND_NOT_FOUND_INSTALL_PROMPT: string;
		npm_config_metrics_registry: string;
		QT_QPA_PLATFORMTHEME: string;
		FINGERS_COMPACT_HINTS: string;
		LOGNAME: string;
		LESS_TERMCAP_us: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		_: string;
		npm_config_prefix: string;
		COLORFGBG: string;
		FINGERS_HINT_FORMAT_NOCOMPACT: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		XDG_SESSION_ID: string;
		npm_config_cache: string;
		EXT: string;
		npm_config_node_gyp: string;
		PATH: string;
		GTK3_MODULES: string;
		SESSION_MANAGER: string;
		_JAVA_OPTIONS: string;
		NODE: string;
		npm_package_name: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_PATH: string;
		DISPLAY: string;
		FINGERS_HIGHLIGHT_FORMAT_NOCOMPACT: string;
		LANG: string;
		POWERSHELL_UPDATECHECK: string;
		XDG_CURRENT_DESKTOP: string;
		LS_COLORS: string;
		TERM_PROGRAM: string;
		XAUTHORITY: string;
		XDG_SESSION_DESKTOP: string;
		ZSH_TMUX_TERM: string;
		npm_lifecycle_script: string;
		FINGERS_HINT_FORMAT: string;
		FINGERS_PATTERNS: string;
		SSH_AUTH_SOCK: string;
		XDG_GREETER_DATA_DIR: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		FINGERS_HINT_FORMAT_NOCOMPACT_NOCOLOR: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		LESS_TERMCAP_mb: string;
		FINGERS_HIGHLIGHT_FORMAT: string;
		LESS_TERMCAP_md: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		FINGERS_HINT_POSITION_NOCOMPACT: string;
		LESS_TERMCAP_me: string;
		PWD: string;
		npm_config_globalignorefile: string;
		npm_execpath: string;
		FINGERS_HIGHLIGHT_FORMAT_NOCOMPACT_NOCOLOR: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		npm_command: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		FINGERS_HINT_FORMAT_NOCOLOR: string;
		TMUX_PANE: string;
		EDITOR: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
