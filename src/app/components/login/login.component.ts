import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit, OnDestroy {
  error: Error | null = null;
  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth) {
  }


  async ngOnInit() {
    try {
      await this.oktaAuth.signInWithRedirect();
    } catch (err) {
      console.error(err);
      this.error = err as Error;
    }
  }

  ngOnDestroy() {
    
  }


}
