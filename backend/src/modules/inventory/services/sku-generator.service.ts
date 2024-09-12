import { Injectable } from '@nestjs/common';
import { String } from 'src/lib/string';

@Injectable()
export class SKUGeneratorService {
    generateSKU(name: string, prefix = '', suffix = ''): string {
        name = String.normalize(name)
        const parts = name.split(' ')
    
        let sku = ''
        for (let i = 0; i < parts.length; i++) {
            sku = `${sku}${parts[i].substring(0, 2)}`
        }
    
        const time = Date.now().toString()
        return `${prefix}${sku}${suffix}${time.slice(-2)}`.toUpperCase().replace(/[^a-zA-Z0-9]/g, '')
    }
}
