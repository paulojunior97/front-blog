export class SessionStorage {
  /**
   * Insere informação no `window.sessionStorage`
   * @param key Chave que será utilizada
   * @param value Valor que vai ser inserido
   */
  static setItem(key: string, value: any): void {
    try {
      (window).sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Recupera o valor no `window.sessionStorage`
   * @param key Chave do valor que será recuperado
   */
  static getItem(key: string): any {
    try {
      return JSON.parse((window).sessionStorage.getItem(key));
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  /**
   * Remove o valor no `window.sessionStorage`
   * @param key Chave do valor que será removido
   */
  static removeItem(key: string): void {
    try {
      (window).sessionStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Verifica se existe valor no `window.sessionStorage`
   * @param key Chave do valor que será verificada
   */
  static hasItem(key: string): boolean {
    try {
      const value = SessionStorage.getItem(key);
      return !!value;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
