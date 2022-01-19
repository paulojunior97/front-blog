export abstract class LocalStorage {
  /**
   * Insere informação no `window.localStorage`
   * @param key Chave que será utilizada
   * @param value Valor que vai ser inserido
   */
  static setItem(key: string, value: any): void {
    try {
      (window).localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Recupera o valor no `window.localStorage`
   * @param key Chave do valor que será recuperado
   */
  static getItem(key: string): any {
    try {
      return JSON.parse((window).localStorage.getItem(key));
    } catch (e) {
      // console.error(e);
      return null;
    }
  }
  /**
   * Remove o valor no `window.localStorage`
   * @param key Chave do valor que será removido
   */
  static removeItem(key: string): void {
    try {
      (window).localStorage.removeItem(key);
    } catch (e) {
      console.error(e);

    }
  }
  /**
   * Verifica se existe valor no `window.localStorage`
   * @param key Chave do valor que será verificada
   */
  static hasItem(key: string): boolean {
    try {
      return !!LocalStorage.getItem(key);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  /**
   * limpa todos os valores salvo em localStorage
   */
  static clear(): void {
    (window).localStorage.clear();
  }
}
