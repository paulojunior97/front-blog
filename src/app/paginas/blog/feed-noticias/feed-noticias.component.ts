import { Component, OnInit } from '@angular/core';
import {FeedNoticiasService} from '../../../service/feed-noticias.service';
import {FeedNoticiaModel} from '../../../model/feed-noticia.model';

@Component({
  selector: 'app-feed-noticias',
  templateUrl: './feed-noticias.component.html',
  styleUrls: ['./feed-noticias.component.scss']
})
export class FeedNoticiasComponent implements OnInit {

  publicacoes: Array<FeedNoticiaModel> = [];

  constructor(
    private feedNoticiasService: FeedNoticiasService
  ) { }

  ngOnInit() {
    this.listarPublicacoes();
  }

  private listarPublicacoes() {
    this.feedNoticiasService.feedNoticias().subscribe(response => {
      this.publicacoes = response;
    });
  }
}
