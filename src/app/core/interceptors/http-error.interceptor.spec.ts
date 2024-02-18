import { TestBed } from '@angular/core/testing';

import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { IUser } from 'src/app/interfaces/user.interface';
import { HttpErrorInterceptor } from './http-error.interceptor';

describe('HttpErrorInterceptor', () => {

    let client: HttpClient;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpErrorInterceptor,
                    multi: true,
                },
                provideHttpClient(),
                provideHttpClientTesting(),
            ]
        });
        client = TestBed.inject(HttpClient);
        httpController = TestBed.inject(HttpTestingController);

    });
    it('should be invoked', async () =>{
        const body:IUser = { id:'1', email:'test@TestBed.com', firstName: 'Juan', lastName: 'Castro' };
        const expected = { id:'1', email:'test@TestBed.com', firstName: 'Juan', lastName: 'Castro' };
        client.put('/api/users', body).subscribe()
        const put = httpController.expectOne('/api/users')
        expect(put.request.body).toEqual(expected)
    });
});