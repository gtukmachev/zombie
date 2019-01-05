import {GameObj} from '../objects/game-obj';
import {GameObjectCompanion} from '../objects/game-object-companion';

export abstract class Mover<ParentGameObjectType extends GameObj> extends GameObjectCompanion<ParentGameObjectType> {

  abstract move(): void;

}
