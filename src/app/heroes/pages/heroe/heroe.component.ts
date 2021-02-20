import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius:5px;
    }
  `]
})
export class HeroeComponent implements OnInit {
  @Input() heroe!:Heroes;

  constructor( private activatedRoute:ActivatedRoute,
               private router:Router,  
               private heroesService:HeroesService  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id})  => this.heroesService.getHeroePorId( id ) )
    )
    .subscribe(  heroe  => this.heroe = heroe );
     /* this.activatedRoute.params
    .subscribe( (params:Heroes) => {
      this.heroe = params
      console.log(params.id);
    } ) */
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
