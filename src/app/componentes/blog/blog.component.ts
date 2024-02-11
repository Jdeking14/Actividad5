import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    newPost: Post = { id: 0, title: "", body: "", image: "", date: "" };
    arrPosts: Post[] = [];

    constructor(private postsService: PostsService) { }
  
 /**
  * Funcion que se encarga de obtener una imagen a traves de un file que se pasa en la pagina web
  * @param event 
  */
    displayImageURL(event: Event): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newPost.image = e.target!.result as string; // Almacena la representación Base64 de la imagen
        };
        reader.readAsDataURL(file); // Convierte la imagen a Base64
      }
    }
  
    /**
     * funcion que contiene la logica para guardar los elementos del formulario en forma de post
     */
    guardar() {
      if (this.newPost.title !== "" && this.newPost.body !== "" && this.newPost.image !== "" && this.newPost.date !== "") {
        this.postsService.insertPost(this.newPost);
        this.newPost = { id: 0, title: "", body: "", image: "", date: "" }; // se limpia el formulario una vez añadido el post
      } else {
        alert('Rellene todos los campos, por favor');
      }
    }

    /**
     * funcion que sirve Para mostrar los posts que hay guardados
     */
    ngOnInit(): void {
        this.arrPosts = this.postsService.getAll();
      }
  }
  