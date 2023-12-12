import { Request, Response } from 'express';
import BasicService from '../service/basic.service';

class BasicController {
    basicService: BasicService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.basicService = new BasicService();
        this.request = req;
        this.response = res;
    }

    async list(model: any = undefined): Promise<object[] | object> {
        try {
            const result = await this.basicService.list(this.model || model);

            return result;
        } catch (err: any) {
            
            return {
                errors: err.erros || [],
                message: err.message,
                status: 400,
                errorType: err?.errorType
            };
        }
    }

    async delete(model: any = undefined, filters: object = {}): Promise<void | object> {
        try {
            await this.basicService.delete(this.model || model, filters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default BasicController;
