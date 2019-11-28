import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit, HostListener, Directive, HostBinding, Renderer } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Directive({
  selector: "[ccCardHover]"
})
export class AppComponent {

  
  @HostBinding('class.card-outline-primary')private ishovering: boolean;

  constructor(private el: ElementRef,
    private renderer: Renderer) {
  }
  ytPlayWidth = 850;
  ytPlayHeight = 650;

  playerVars = {
    'mute': 1
  };

  title = 'autoplay-app';
  
  newvideo = [
    {id:'d-nxFHYsxN0',playerData:null},
    {id:'tI8ijLpZaHk',playerData:null},
    {id:'Fkd9TWUtFm0',playerData:null},
    {id:'vWLcyFtni6U',playerData:null},
    {id:'3SDkzDlw1yc',playerData:null},
    {id:'wM4L_yDGqpo',playerData:null},
    {id:'0PI0XhxeLaA',playerData:null},
    {id:'YBFHCAPNwLI',playerData:null},
    {id:'zEPYSNO7o3Q',playerData:null},
  ]
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
  
  ngOnInit() {
    var _this = this;
    window.addEventListener('scroll', function(e) {
      
      _this.showVideo();
      
    });
  }

  scroll = (): void => {
    
  };
  savePlayer(player,index) {
    this.newvideo[index].playerData = player;
    if(index == 0){
      this.newvideo[index].playerData.playVideo();
    }
   
  }
  onStateChange(event) {
  }

  showVideo(){
    this.newvideo.forEach((el,index) => {

      var element = document.querySelector('#vidio-'+el.id);
        var position = element.getBoundingClientRect();
  
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
          this.newvideo[index].playerData.playVideo();
        }else{
          this.newvideo[index].playerData.pauseVideo();
        }
  
    });
  }
}
