import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../styles/variables.scss', '../../../styles/mixins.scss']
})
export class FooterComponent implements OnInit {
  emailAddress = 'helpdesk@ttms.com.pl';
  emailSubject = 'Error occurred';
  mailTo: string;

  constructor() {
    this.mailTo = `mailto:${this.emailAddress}?subject=${this.emailSubject}`;
  }

  ngOnInit(): void {
  }
}
