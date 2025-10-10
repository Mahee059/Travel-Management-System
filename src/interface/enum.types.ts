

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHERS = 'OTHERS',
    NOT_PREFER = 'NOT PREFER',
}

export enum Role {
    USER = 'USER',
    SUPER_ADMIN = 'SUPER ADMIN',
    ADMIN = 'ADMIN'
}

export const admins = [Role.ADMIN, Role.SUPER_ADMIN];

export enum Package_Charge {
    PER_DAY = 'PER_DAY',
    PER_PERSON = 'PER_PERSON',
}

export enum Booking_Status {
    PENDING = 'PENDING',
    CONFIRMED = "CONFIRMED",
    COMPLETED = "COMPLETED",
    CANCELED = 'CANCELED'
}