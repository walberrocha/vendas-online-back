import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
    constructor( @Inject(Cache) private cacheManager: Cache,) {}

    async getCache<T>(key: string, functionRequest: () => Promise<T>): Promise<T> {
        const allData: T = await this.cacheManager.get(key);

        if (allData) {
            return allData;
        }

        const cities: T = await functionRequest();

        await this.cacheManager.set(key, cities)

        return cities;
    }
}
