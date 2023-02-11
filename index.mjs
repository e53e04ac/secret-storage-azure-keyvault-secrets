/*!
    @e53e04ac/secret-storage-azure-keyvault-secrets/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

import { Base } from 'base';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').SecretStorageAzureKeyvaultSecrets.Constructor} */
const constructor = ((options) => {

    /** @typedef {Required<typeof options>['__GenericTypes__']} GenericTypes */
    /** @typedef {GenericTypes['T']} T */

    const _options = ({
        secretClient: hold(() => {
            return unwrap(options.secretClient);
        }),
        deserialize: options.deserialize,
    });

    /** @type {import('.').SecretStorageAzureKeyvaultSecrets._Self<T>} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').SecretStorageAzureKeyvaultSecrets.Self<T>} */
    const self = ({
        ...Base({}),
        _SecretStorage: (() => {
            return _self;
        }),
        _SecretStorageAzureKeyvaultSecrets: (() => {
            return _self;
        }),
        get: (async (key) => {
            const keyVaultSecret = await _options.secretClient().getSecret(key).then((value) => {
                return value;
            }, (error) => {
                return null;
            });
            if (keyVaultSecret?.value == null) {
                return null;
            }
            const value = await _options.deserialize(keyVaultSecret.value, key);
            return value;
        }),
    });

    return self;

});

/** @type {import('.').SecretStorageAzureKeyvaultSecrets.Companion} */
const companion = ({
    fromDefaultCredential: (({ vaultName, ...rest }) => {
        const url = `https://${vaultName}.vault.azure.net`;
        const credential = new DefaultAzureCredential();
        const secretClient = new SecretClient(url, credential);
        return constructor({
            secretClient,
            ...rest,
        });
    }),
    from: ((params) => {
        if ('vaultName' in params) {
            return companion.fromDefaultCredential(params);
        }
        throw new Error();
    }),
});

/** @type {import('.').SecretStorageAzureKeyvaultSecrets.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as SecretStorageAzureKeyvaultSecrets };

export { constructorWithCompanion as SecretStorage };
