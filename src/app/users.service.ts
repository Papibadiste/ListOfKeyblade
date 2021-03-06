import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: any = [
    {
      name: 'Sora',
      mdp: 'Coeur',
      desc: 'Sora est le héros de la série Kingdom Hearts, ainsi qu\'un élu de la Keyblade. Vivant sur les Îles du Destin avec ses meilleurs amis Riku et Kairi, il voulait quitter son monde avec eux, à l\'aide d\'un radeau, et en découvrir d\'autres. Toutefois, la nuit avant leur départ, l\'île fut attaquée par les Sans-cœur, qui détruisirent le cœur de ce monde.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHvHMA8kGN1NqRl4gB-zOipIMy3dxNbTarg&usqp=CAU'
    },
    {
      desc: 'Kairi est une jeune fille vivant dans le monde des Îles du Destin avec ses amis Sora, Riku, Selphie, Wakka et Tidus. Elle avait 14 ans au début de Kingdom Hearts, et en a 15 dans Kingdom Hearts II. Elle est l\'une des sept Princesses de cœur et essaye de suivre Sora et Riku dans leurs aventures bien qu\'elle soit souvent mise de côté.',
      name: 'Kairi',
      mdp: 'Sora',
      img: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/kingdom-hearts-kairi.jpg'
    },
    {
      desc: 'Meilleur ami et rival de Sora, Riku vivait avec lui depuis toujours sur les Îles du Destin. Il succomba par le passé aux Ténèbres, mais les a depuis surmontées et les utilise maintenant tout autant que la Lumière.\n' +
        '\n' +
        'Son nom (陸) signifie "terre ferme" en japonais.',
      name: 'Riku',
      mdp: 'Ansem',
      img: 'https://pbs.twimg.com/profile_images/1101879863256993792/NpC5uZ_k.jpg'
    },
    {
      desc: 'Le Roi Mickey est l\'un des personnages principaux dans la série Kingdom Hearts, ainsi que l\'un des plus puissants. Souverain du Château Disney et compagnon de la Reine Minnie, il voyage de monde en monde en combattant les Ténèbres durant les événements de la série. Malgré son statut de maître de la Keyblade du Domaine des Ténèbres, il choisit de vivre dans la Lumière.',
      name: 'Mickey',
      mdp: 'Pluto',
      img: 'https://www.reference-gaming.com/assets/media/product/76202/disney-mickey-mouse-face-shaped-towel.jpg?format=product-cover-large&k=1571035471'
    },
    {
      desc: 'Roxas est le treizième membre de l\'Organisation XIII. Il causa la surprise générale à la sortie de Kingdom Hearts II, car il est contrôlé au début du jeu à la place de Sora. Ce remplacement s\'explique par le fait que Roxas soit le Simili de ce dernier. Comme son original, il maîtrise la Keyblade, d\'où son surnom de "La Clé du Destin".',
      name: 'Roxas',
      mdp: 'Axel',
      img: 'data:image/jpeg;base64,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'
    },
    {
      desc: 'Huitième membre de l\'Organisation XIII et Simili de Lea, Axel est l\'un des membres les plus actifs du groupe, mais aussi le mentor et meilleur ami de Roxas, le Simili de Sora, lorsqu\'il faisait partie de l\'Organisation.',
      name: 'Axel',
      mdp: 'Isa',
      img: 'https://i.pinimg.com/736x/02/7b/5a/027b5af384782d8151958e0d8c9886b3.jpg'
    },
    {
      desc: 'Xion est le numéro XIV de l\'Organisation XIII et est l\'un des personnages principaux du jeu Kingdom Hearts: 358/2 Days. Amie de Roxas et Axel, Xion n\'est pas réellement un Simili, mais une Réplique créée par l\'Organisation à partir de Roxas, et est donc une copie indirecte de Sora.\n' +
        '\n' +
        'Faisant partie du Programme de réplication, à l\'instar de Néo Riku, elle n\'est pas considérée par la majorité des membres de l\'Organisation comme l\'une des leurs, d\'où le fait qu\'il n\'y ait pas "d\'Organisation XIV" et qu\'il n\'y a toujours eu que treize sièges dans la Salle du Conseil.',
      name: 'Xion',
      mdp: 'Who?',
      img: 'https://pbs.twimg.com/profile_images/1149721060394373122/peEGjU72.jpg'
    },
    {
      desc: 'Maître Aqua est un protagoniste apparaissant pour la première fois dans Kingdom Hearts: Birth by Sleep. Elle est la meilleure amie de Terra et Ventus. C\'est une élève sérieuse et courageuse de Maître Eraqus, avec un vrai sens de l\'honneur. Elle n\'hésite pas à tout faire pour aider ses amis.\n' +
        '\n' +
        'Son nom signifie eau en Latin, impliquant un lien avec Kairi (Kai voulant dire océan en japonais).',
      name: 'Aqua',
      mdp: 'Terra',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSezi3YX6goOOlzslL031E6ZjhSW8Rif4mg&usqp=CAU'
    }
  ];

  constructor() { }

  // tslint:disable-next-line:typedef
  public login(array: any){
    let result;
    this.users.forEach(user => {
      if (user.name === array.name &&  user.mdp === array.mdp ){
        result = true;

      }
    });
    return result ;
  }
}
