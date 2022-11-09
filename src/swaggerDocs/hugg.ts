/**
@swagger
* components:
*     schemas:
*       brand:
*         type: object
*         required:
*           - id
*           - make
*         properties:
*           id:
*             type: string
*             description: The id of the brand.
*             example: approved    
*         example:
*            - id: 3
*              name: chocolate
*              products: []
*       products:
*         type: array
*         items:
*           type: object
*         properties:
*           make:
*             type: string
*             description: list of products.
*         example:
*            - id: 3
*              name: chocolate
*       stores:
*         type: array
*         items:
*           type: object
*         properties:
*           make:
*             type: string
*             description: list of stores.
*         example:
*            - id: 3
*              name: sainsburs
*/

/** 
 *@swagger
 *  tags:
 *    name: hugg
 *    description: API to fetch products, brands and stores.
 */

/**
 * @swagger
 * /brand/{brandId}:
 *    get:
 *      summary: get brand of based on brandid
 *      tags: [hugg]
 *      parameters:
 *        - in: path
 *          name: brandId
 *          schema:
 *            type: string
 *            required: true
 *            description: id of the brand
 *            example: 9e225078-d157-4402-8590-60df83de40d6    
 *      responses:
 *        "200":
 *          description: return brand
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/brand'
 */

/**
 * @swagger
 * /products/{brandId}:
 *    get:
 *      summary: get all products by brand id
 *      tags: [hugg]
 *      parameters:
 *        - in: path
 *          name: brandId
 *          schema:
 *            type: string
 *            required: true
 *            description: id of the product
 *            example: 9e225078-d157-4402-8590-60df83de40d6
 *      responses:
 *        "200":
 *          description: return all products by brand id
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/products'
 */

/**
 * @swagger
 * /product/stores/{productId}:
 *    get:
 *      summary: get all stores by productId
 *      tags: [hugg]
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *            type: string
 *            required: true
 *            description: id of the product
 *            example: 26f7a82a-30a8-44e4-93cb-499a256d0ce9
 *      responses:
 *        "200":
 *          description: return all stores by productId
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/stores'
 */

/**
 * @swagger
 * /brand/stores/{brandId}:
 *    get:
 *      summary: get all stores by brandId
 *      tags: [hugg]
 *      parameters:
 *        - in: path
 *          name: brandId
 *          schema:
 *            type: string
 *            required: true
 *            description: id of the product
 *            example: 9e225078-d157-4402-8590-60df83de40d6
 *      responses:
 *        "200":
 *          description: return all stores by brandId
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/stores'
 */

