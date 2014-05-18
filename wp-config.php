<?php
/**
 * In dieser Datei werden die Grundeinstellungen für WordPress vorgenommen.
 *
 * Zu diesen Einstellungen gehören: MySQL-Zugangsdaten, Tabellenpräfix,
 * Secret-Keys, Sprache und ABSPATH. Mehr Informationen zur wp-config.php gibt es auf der {@link http://codex.wordpress.org/Editing_wp-config.php
 * wp-config.php editieren} Seite im Codex. Die Informationen für die MySQL-Datenbank bekommst du von deinem Webhoster.
 *
 * Diese Datei wird von der wp-config.php-Erzeugungsroutine verwendet. Sie wird ausgeführt, wenn noch keine wp-config.php (aber eine wp-config-sample.php) vorhanden ist,
 * und die Installationsroutine (/wp-admin/install.php) aufgerufen wird.
 * Man kann aber auch direkt in dieser Datei alle Eingaben vornehmen und sie von wp-config-sample.php in wp-config.php umbenennen und die Installation starten.
 *
 * @package WordPress
 */

/**  MySQL Einstellungen - diese Angaben bekommst du von deinem Webhoster. */
/**  Ersetze database_name_here mit dem Namen der Datenbank, die du verwenden möchtest. */
define('DB_NAME', 'brutOnline');

/** Ersetze username_here mit deinem MySQL-Datenbank-Benutzernamen */
define('DB_USER', 'root');

/** Ersetze password_here mit deinem MySQL-Passwort */
define('DB_PASSWORD', 'root');

/** Ersetze localhost mit der MySQL-Serveradresse */
define('DB_HOST', 'localhost');

/** Der Datenbankzeichensatz der beim Erstellen der Datenbanktabellen verwendet werden soll */
define('DB_CHARSET', 'utf8');

/** Der collate type sollte nicht geändert werden */
define('DB_COLLATE', '');

/**#@+
 * Sicherheitsschlüssel
 *
 * Ändere jeden KEY in eine beliebige, möglichst einzigartige Phrase. 
 * Auf der Seite {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service} kannst du dir alle KEYS generieren lassen.
 * Bitte trage für jeden KEY eine eigene Phrase ein. Du kannst die Schlüssel jederzeit wieder ändern, alle angemeldeten Benutzer müssen sich danach erneut anmelden.
 *
 * @seit 2.6.0
 */
define('AUTH_KEY',         'iE[&KW8lSK91v%#|=+*!zwtd:klRFe4/X!^CD,qP?-rl$VwRX>t`FIamIbz[y_d!');
define('SECURE_AUTH_KEY',  '@G(NoG!Gj n[b&&>^BAn@`5i,]a|NKPqk^cH~WIuNH%x.o>!{ UT3<&?!X`XSj3p');
define('LOGGED_IN_KEY',    'o+&G1YSoPFP7yqUe<x)T,;l_v`i/f^O%{YW&-I5(H65iTEH.<>Dz]Ks{w-N?yW_M');
define('NONCE_KEY',        'ENa+wPO8VVRYnuoQ&D@j{4w!/J/(x87sAhhkzLy=aZ8?nl2t6MMPv+(cVbo$Lx#=');
define('AUTH_SALT',        'I<>%Fsr+]%G+S5[|/~r/yxhbVq+w:TirI+Xc{2/GR~=FG@B&,=ng:m+FbXTc3J|w');
define('SECURE_AUTH_SALT', '&:dR]*1efX./v@rPb|$+}~~aW%-<iHR;^/%IW-AqhIo.x3mG2K1FJ1JQ-HIK4!lU');
define('LOGGED_IN_SALT',   'B5:`p(D35^w=/iT(;lPf%>pzu(kG9=6tYt8rt8Vb!PQ_DLGz|V]|((RxDy|v BII');
define('NONCE_SALT',       'sd8ye.sK~xU+e%9REem2A~TS6!XoMJ,n(?XwSf/PSl%YobVM*^/M`F~msbxr=X#e');
/**#@-*/

/**
 * WordPress Datenbanktabellen-Präfix
 *
 *  Wenn du verschiedene Präfixe benutzt, kannst du innerhalb einer Datenbank
 *  verschiedene WordPress-Installationen betreiben. Nur Zahlen, Buchstaben und Unterstriche bitte!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Sprachdatei
 *
 * Hier kannst du einstellen, welche Sprachdatei benutzt werden soll. Die entsprechende
 * Sprachdatei muss im Ordner wp-content/languages vorhanden sein, beispielsweise de_DE.mo
 * Wenn du nichts einträgst, wird Englisch genommen.
 */
define('WPLANG', 'de_DE');
define('WP_MEMORY_LIMIT', '100M');
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');