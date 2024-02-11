import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPost: Post[] = POSTS //Array multidimensional para los post
  private id: number = 3; //inicializamos id, que en este caso seria el 3 porque las dos noticias ya estan inicializadas al recoger los posts del json
  constructor() { }
/**
 * Funcion usada para retornar los posts
 * @returns Retorna todos los posts
 */
  getAll(): Post[] {
    return this.arrPost
  }

  /**
   *  Funcion que rellena los datos de la interfaz post 
   * @param pNewPost Parametro de tipo post, que es la interfaz definida al inicio de la clase. 
   */
  insertPost(pNewPost: Post): void {
    pNewPost.id = this.id;
    this.arrPost.push(pNewPost);
    this.id++;
  }
  
}