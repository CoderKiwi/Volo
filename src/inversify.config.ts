import {container} from 'inversify-props';
import IMediaImageService from '@/services/IMediaImageService';
import IMediaMetadataService from '@/services/IMediaMetadataService';
import FanartApi from '@/services/impl/FanartApi';
import TraktApi from '@/services/impl/TraktApi';

export default function buildDependencyContainer(): void {
    container.addSingleton<IMediaMetadataService>(TraktApi);
    container.addSingleton<IMediaImageService>(FanartApi);
}
