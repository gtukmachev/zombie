import {GameObj} from '../objects/game-obj';
import {GameObjectCompanion} from '../objects/game-object-companion';


export abstract class Drawer<ParentGameObjectType extends GameObj> extends GameObjectCompanion<ParentGameObjectType> {

  abstract draw(): void;

}
