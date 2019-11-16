import IMediaMetadataService from '@/services/IMediaMetadataService';
import IMediaImageService from '@/services/IMediaImageService';

const TYPES = {
    IMediaMetadataService: Symbol.for('IMediaMetadataService'),
    IMediaImageService: Symbol.for('IMediaImageService'),
};
export { TYPES };
