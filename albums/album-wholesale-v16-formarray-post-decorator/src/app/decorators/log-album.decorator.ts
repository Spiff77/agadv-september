import {Album} from '../model/album.model';

export function LogAlbum() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (album: Album, ...args: any[]) {
      console.log(`Album ${propertyKey === 'add' ? 'Ajout' : 'Suppression'}:`, album);
      return originalMethod.apply(this, [album, ...args]);
    };

    return descriptor;
  };
}
