import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers: string[] = ['Testserver 1', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer () {
    this.servers.push(this.serverName)
    this.serverCreated = true;
    this.serverCreationStatus = "Server was Created! Name is " + this.serverName;
  }
}
