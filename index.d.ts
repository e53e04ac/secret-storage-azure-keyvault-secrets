/*!
    @e53e04ac/secret-storage-azure-keyvault-secrets/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { SecretClient } from '@azure/keyvault-secrets';

import { Base } from 'base';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';
import { SecretStorage } from 'secret-storage';

export declare namespace SecretStorageAzureKeyvaultSecrets {

    type Options<T extends object> = {
        readonly secretClient: ValueOrGet<SecretClient>;
        readonly deserialize: {
            (value: string, key: string): Promise<T>;
        };
        readonly __GenericTypes__?: {
            readonly T: T;
        };
    };

    type _Self<T extends object> = {
        readonly options: Get<Options<T>>;
        readonly _options: Get<unknown>;
    };

    type Self<T extends object> = Base & SecretStorage<T> & {
        readonly _SecretStorage: Get<_Self<T>>;
        readonly _SecretStorageAzureKeyvaultSecrets: Get<_Self<T>>;
    };

    type Constructor = {
        <T extends object>(options: Options<T>): Self<T>;
    };

    type Companion = {
        readonly fromDefaultCredential: {
            <T extends object>(params: {
                readonly vaultName: string;
                readonly deserialize: Options<T>['deserialize'];
            }): Self<T>;
        };
        readonly from: Companion['fromDefaultCredential'];
    };

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type SecretStorageAzureKeyvaultSecrets<T extends object> = SecretStorageAzureKeyvaultSecrets.Self<T>;

export declare const SecretStorageAzureKeyvaultSecrets: SecretStorageAzureKeyvaultSecrets.ConstructorWithCompanion;

export declare const SecretStorage: SecretStorageAzureKeyvaultSecrets.ConstructorWithCompanion;
