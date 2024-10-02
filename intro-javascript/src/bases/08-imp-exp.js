// import heroes, {owners} from './data/heroes'

// console.log(owners)
import heroes from '../data/heroes'
export const getHeroeById = (id) => heroes.find ((heroe)=> heroe.id === id);

// console.log(getHeroeBayId(1))

export const getHeroeBayOwner = (owner) => heroes.filter ((heroe)=> heroe.owner === owner);

// console.log(getHeroeBayOwner('Marvel'))