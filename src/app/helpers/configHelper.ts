export class ConfigHelper {
    public static Url: string = '/v1/'
    //public static Url: string = 'http://localhost:3000/api/'
    public static photo: string = '';

    public static storageKeys = {
        token: 'nofood.token',
        user: 'nofood.user',
        selectCategory: 'nofood.select.category'
    }

    public static Events = {
        atualizaoQuantidadeProduto: 'atualizacao.quantidade.produto'
    }


}
