
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
// import { NbAuthService } from '../../services/auth.service';
export declare class LogoutComponent implements OnInit {
    protected service:AuthenticationService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    strategy: string;
    constructor(service: AuthenticationService, options: {}, router: Router);
    ngOnInit(): void;
    logout(strategy: string): void;
    getConfigValue(key: string): any;
}
