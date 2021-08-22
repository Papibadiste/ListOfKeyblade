import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListKeybladeService {

  constructor() { }

  Keyblades: any = [
    {
      name: 'Chaine royale',
      nameUser: 'Sora',
      desc: 'La Chaîne Royale est la Keyblade de base de Sora dans chaque épisode de la série.\n' +
        '\n' +
        'Sora reçut cette Keyblade sur les Îles du Destin, lors de la tempête ténébreuse. Toutefois, Sora n’est pas le seul utilisateur de cette Keyblade : elle a aussi été utilisée par Roxas et Xion. La Keyblade du Roi Mickey est identique à la Chaîne Royale, mais les couleurs sont inversées. Cette Keyblade apparut aussi dans la fin secrète de Kingdom Hearts II, nommée Retrouvailles.',
     },
    {
      name: 'Rose de Combat',
      nameUser: 'Sora',
      desc: 'La Rose éternelle est une Keyblade apparaissant dans Kingdom Hearts,Kingdom Hearts: Chain of Memories et Kingdom Hearts: χ. L\'une des plus puissantes dans Kingdom Hearts, cette Keyblade est obtenue après avoir parlé à Belle.',
       },
    {
      name: 'Ultima',
      nameUser: 'Sora',
      desc: 'Keyblade parmi les plus puissantes de la série, Ultima ne s\'acquiert jamais en suivant le scénario. Dans Kingdom Hearts, Kingdom Hearts II et Kingdom Hearts III, elle s\'obtient par les mogs, en remplissant certaines conditions. Dans le premier opus, le pendentif au bout semble avoir une ressemblance avec le symbole des Sans-cœur.',
      },
    {
      name: 'Appel du destin',
      nameUser: 'Kairi',
      desc: 'L\'Appel du destin est une Keyblade apparaissant pour la première fois dans Kingdom Hearts II. Elle représente Kairi.',
       },
    {
      name: 'Chaîne Royale D',
      nameUser: 'Mickey',
      desc: 'La Chaîne Royale D est l\'arme du Roi Mickey et une version inversée de la Chaîne Royale, apparaissant pour la première fois vers la fin de Kingdom Hearts. Elle est la Keyblade du Domaine des Ténèbres, découverte par le roi Mickey dans sa quête sur la disparition des mondes dans Kingdom Hearts.\n' +
        '\n' +
        'Elle peut être utilisée du moment que vous contrôlez le Roi, dans Kingdom Hearts II et Kingdom Hearts: 358/2 Days. Dans ce dernier, il est possible de contrôler des versions améliorées de cette Keyblade : la Chaine Royale D+, la Chaîne Royale D++ voire même la Chaine Royale DΩ en fonction des Pièces armement utilisées.',
      },
    {
      name: 'L\'Illustre',
      nameUser: 'Riku',
      desc: 'L\'Illustre (オーバードライブ Ōbādoraibu) est une Keyblade apparaissant dans Kingdom Hearts 3D: Dream Drop Distance. Elle est maniable par Sora et Riku. Cette Keyblade est aussi puissante que la Keyblade Ultima dans cette opus de la série ; à l\'exception qu\'elle donne plus de force d\'attaque mais moins de puissance magique.',
       },
    {
      name: 'Couronne de faute',
      nameUser: 'Roxas',
      desc: 'Couronne de faute est une Keyblade de Roxas et de Xion dans Kingdom Hearts: 358/2 Days. Elle peut évoluer en Couronne de faute + et Couronne de faute ++. Ils peuvent l\'utiliser s\'ils s\'équipent de la pièce fantôme.',
      },
    {
      name: 'Parapluie',
      nameUser: 'Roxas',
      desc: 'Le Parapluie est une Keyblade de Roxas et Xion. Ils peuvent l\'utiliser en les équipant de la Pièce simple. La pièce Simple prend souvent l\'apparence d\'un objet du quotidien, ce qui est souvent comique.',
     },
    {
      name: 'Incandescence',
      nameUser: 'Axel',
      desc: 'La base de cette Keyblade est l\'un des Chakrams représentatifs d\'Axel, Éterniflammes, et la lame ressemble à une grande flamme. Elle présente des similitudes avec deux autres Keyblades associées à Lea, Ignescence et Flamme ardente.',
    },
    {
      name: 'Chaîne Royale',
      nameUser: 'Xion',
      desc: 'Dans Kingdom Hearts: 358/2 Days, on retrouve aussi la Chaîne Royale +, que Roxas et Xion peuvent équiper en plaçant trois modules compétences sur la Pièce Zéro. Celle-ci possède la même apparence que la Chaîne Royale, mais elle augmente les statistiques de manière beaucoup plus conséquente, et offre des compétences rares. La meilleure version de cette Keyblade est la Chaîne Royale ++, qui ne peut être utilisée qu\'une fois le joueur a déverrouillé Sora en tant que personnage jouable.',
     },
    {
      name: 'Larme de pluie',
      nameUser: 'Aqua',
      desc: 'Larme de pluie est la Keyblade de base d\'Aqua dans le jeu Kingdom Hearts: Birth by Sleep et aussi celle qui lui sert de véhicule pour voyager entre les mondes.',
     },
    {
      name: 'Couronne absolue',
      nameUser: 'Aqua',
      desc: 'Couronne absolue (クラウンアンリミット Kuraun Anrimitto, Couronne absolue, littéralement "Couronne Illimitée") est une Keyblade apparaissant dans Kingdom Hearts: Birth by Sleep Final Mix. Terra, Ventus et Aqua obtiennent cette Keyblade après avoir vaincu Noheart dans l\'Arène des Mirages.',
     }
  ];
}
