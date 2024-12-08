import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('get-details')
  getUserDetails(@Query('firstname') firstname: string) {
    if (!firstname) {
      return { error: 'Please provide a valid firstname!' };
    }

    const userDatabase = {
      miryam: {
        lastName: 'Mandel',
        age: 20,
        address: 'Pinsker 38, Kriay Ata',
        phone: '054-1234567',
      },
      shira: {
        lastName: 'Choan',
        age: 32,
        address: '456 Elm St, Haifa',
        phone: '054-7654321',
      },
      moshe: {
        lastName: 'Ben-David',
        age: 40,
        address: '789 Pine St, Jerusalem',
        phone: '054-9876543',
      },
    };

    const userDetails = userDatabase[firstname.toLowerCase()];
    return userDetails || { error: 'Sorry, cannot find this name, try again!' };
  }
}
