import {Container} from 'inversify';
import IMediaImageService from '@/services/IMediaImageService';
import IMediaMetadataService from '@/services/IMediaMetadataService';
import FanartApi from '@/services/impl/FanartApi';
import TraktApi from '@/services/impl/TraktApi';
import { TYPES } from './types';

const myContainer = new Container();
myContainer.bind<IMediaMetadataService>(TYPES.IMediaMetadataService).to(TraktApi);
myContainer.bind<IMediaImageService>(TYPES.IMediaImageService).to(FanartApi);

export { myContainer };
