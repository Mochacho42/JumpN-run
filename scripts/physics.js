/* Un truc pour gérer la physique d’une manière toute conne.
 * Genre la gravité, les collisions un minimum, et le vrai luxe serait de gérer
 * le temps. On fout tout ça dans un objet ou chépatrokoi, et il peut être
 * « appliqué » sur d’autres objets et définis des méthodes à utiliser ou non
 * pour définir la physique. Je pense que c’est une bonne idée.
 *
 * Je pense que ce n’est pas une bonne idée d’utiliser autre chose que « jump »
 * pour le saut de Pikachu, et avec un micro-système physique, il suffirait de
 * lui appliquer une force en ordonnée suffisante pour contrer la gravité (qui
 * fait tomber les objets en boucle). Un truc comme ça me semble beaucoup plus
 * robuste et résistants aux bugs. Faut le coder.
 *
 * Des bisous et désolé à ceux qui ont pensé que j’avais enfin rajouté du code.
 */
