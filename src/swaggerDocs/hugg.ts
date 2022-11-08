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
*/

/** 
 *@swagger
 *  tags:
 *    name: hugg
 *    description: API to fetch products, brands and stores.
 */

/**
 * @swagger
 * /hugg/{id}:
 *    get:
 *      summary: get brand of based on brandid
 *      tags: [hugg]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: id of the brand
 *      responses:
 *        "200":
 *          description: return brand
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/products'
 */