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
  
  video: string[] = [
    'https://www.youtube.com/embed/d-nxFHYsxN0?autoplay=1;enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/tI8ijLpZaHk?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/Fkd9TWUtFm0?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/vWLcyFtni6U?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/3SDkzDlw1yc?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/wM4L_yDGqpo?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/0PI0XhxeLaA?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/YBFHCAPNwLI?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/zEPYSNO7o3Q?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer',
    'https://www.youtube.com/embed/GWl5-VLCiJA?enablejsapi=1&version=3&mute=1&playerapiid=ytplayer'
  ]
  
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
